# Prisma schema proposal

This is a suggested v1 database shape for the camping trip app. The goals are:

- keep the authenticated user at the center of the data model
- persist one record per trip
- store the structured trip intake separately from the generated packing list
- keep generated packing lists immutable
- support user-owned gear/items the user can reuse across trips

## Recommended models

| Model             | Purpose                                               |
| ----------------- | ----------------------------------------------------- |
| `User`            | Auth0-backed account record for ownership and history |
| `Trip`            | One camping trip request / history entry              |
| `TripIntake`      | Structured user answers and any clarifying Q&A        |
| `PackingList`     | Immutable generated result for a trip                 |
| `PackingCategory` | Grouping for list sections like groceries or gear     |
| `PackingItem`     | Individual checklist items within a category          |
| `OwnedItem`       | Gear or supplies the user already has                 |

## Suggested fields

### `User`

If Auth0 gives you `email`, `name`, and `imageUrl`, you still want a `User` model.

Why: Auth0 tells you who the person is, but your app still needs its own durable record to own trips, store owned items, and keep app-specific fields that may not exist in Auth0. You also need a stable place to relate trips, packing lists, and future preferences to a user even if the Auth0 profile changes later.

- `id`: UUID or CUID primary key
- `auth0Id`: unique Auth0 subject (`sub`)
- `email`: unique, nullable if Auth0 does not provide it
- `name`
- `imageUrl`
- `createdAt`, `updatedAt`

### `Trip`

- `id`
- `userId`
- `title` or `destinationLabel`
- `destination`
- `tripLengthDays`
- `partySize`
- `weatherSummary`
- `status` (`draft`, `in_progress`, `generated`)
- `createdAt`, `updatedAt`

For MVP, you probably only need `in_progress` and `generated`.

- `in_progress`: the trip exists but the intake/chat and/or generation is not finished yet
- `generated`: the packing list is complete and ready to view

`draft` is only useful if you want to save an empty trip before any chat starts. If you do not need that, skip it.

### `TripIntake`

- `id`
- `tripId`
- `questionsJson`: the fixed intake answers
- `clarificationsJson`: optional follow-up questions/answers from the LLM
- `rawInputJson`: any extra structured metadata worth preserving
- `createdAt`, `updatedAt`

### `PackingList`

- `id`
- `tripId` (unique, one list per trip)
- `provider`
- `model`
- `promptVersion`
- `generationNotes` or `generationMetadataJson`
- `rawOutputJson`: full LLM response snapshot
- `createdAt`

### `PackingCategory`

- `id`
- `packingListId`
- `name`
- `sortOrder`

`sortOrder` is just an integer used to keep categories in a predictable display order, like `0`, `1`, `2`. It lets you control the UI order and PDF order without relying on alphabetical sorting.

### `PackingItem`

- `id`
- `packingCategoryId`
- `name`
- `quantity`
- `notes`
- `sortOrder`
- `isRequired` or `isOptional`

### `OwnedItem`

- `id`
- `userId`
- `name`
- `category`
- `quantity`
- `notes`
- `isArchived`
- `createdAt`, `updatedAt`

## Relationship notes

- A `User` has many `Trip`s and many `OwnedItem`s.
- A `Trip` belongs to one `User`.
- A `Trip` has one `TripIntake`.
- A `Trip` has one immutable `PackingList`.
- A `PackingList` has many `PackingCategory`s.
- A `PackingCategory` has many `PackingItem`s.

## Why this shape

- `Json` columns are useful for preserving the exact structured intake and model output without losing flexibility early on.
- Normalized category/item tables make it easy to render the UI, support ordering, and export to PDF.
- Keeping the generated packing list separate from the trip intake helps preserve immutable trip history.
- `OwnedItem` gives room for a later feature where the app can tailor packing suggestions based on gear the user already owns.

## Future-friendly additions

- `TripMessage` if you want to persist the full chat transcript later
- `PackingItem.status` if users eventually mark items as packed
- `Trip.sharedSlug` if you want shareable trip views later
- `User.preference` fields if the app grows into reusable trip defaults
