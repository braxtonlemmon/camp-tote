# Prisma data examples

These are example records that match the current Prisma schema. The values are realistic, but the IDs are made up.

## `User`

```json
{
  "id": "cm9x8p1kq0000v7f2d8l1n3ab",
  "auth0Id": "auth0|64f2b1c9e0a1b20012345678",
  "email": "jane.doe@example.com",
  "name": "Jane Doe",
  "imageUrl": "https://images.example.com/users/jane.jpg",
  "createdAt": "2026-06-28T14:10:00.000Z",
  "updatedAt": "2026-06-28T14:10:00.000Z"
}
```

## `Trip`

```json
{
  "id": "cm9x8q2uw0001v7f2j3k4l5mn",
  "userId": "cm9x8p1kq0000v7f2d8l1n3ab",
  "title": "Weekend at Rocky Mountain National Park",
  "destination": "Rocky Mountain National Park, CO",
  "tripLengthDays": 3,
  "partySize": 4,
  "weatherSummary": "Cool nights, mild days, chance of afternoon rain",
  "status": "GENERATED",
  "createdAt": "2026-06-29T18:45:00.000Z",
  "updatedAt": "2026-06-29T19:02:00.000Z"
}
```

## `TripIntake`

```json
{
  "id": "cm9x8r4ab0002v7f2n6o7p8qr",
  "tripId": "cm9x8q2uw0001v7f2j3k4l5mn",
  "answersJson": {
    "tripLengthDays": 3,
    "destination": "Rocky Mountain National Park, CO",
    "weather": "Cool nights, mild days, chance of afternoon rain",
    "partySize": 4,
    "campType": "Tent camping",
    "cookingPlan": "We will cook breakfast and dinner at camp",
    "foodPreferences": ["Easy breakfasts", "No seafood"],
    "kids": true,
    "pets": false
  },
  "clarificationsJson": {
    "questions": [
      {
        "question": "Will you need firewood or propane?",
        "answer": "Propane only"
      }
    ]
  },
  "rawInputJson": {
    "source": "chat",
    "completedAtStep": "intake-summary"
  },
  "createdAt": "2026-06-29T18:52:00.000Z",
  "updatedAt": "2026-06-29T18:55:00.000Z"
}
```

## `PackingList`

```json
{
  "id": "cm9x8s5cd0003v7f2s9t0u1vw",
  "tripId": "cm9x8q2uw0001v7f2j3k4l5mn",
  "provider": "google",
  "model": "gemini-2.5-flash",
  "promptVersion": "v1",
  "generationMetadata": {
    "temperature": 0.3,
    "generatedAt": "2026-06-29T19:01:00.000Z"
  },
  "rawOutputJson": {
    "summary": "Packing list generated successfully",
    "categoryCount": 4
  },
  "createdAt": "2026-06-29T19:02:00.000Z"
}
```

## `PackingCategory`

```json
{
  "id": "cm9x8t6ef0004v7f2x2y3z4aa",
  "packingListId": "cm9x8s5cd0003v7f2s9t0u1vw",
  "name": "Camping Equipment",
  "sortOrder": 0
}
```

## `PackingItem`

```json
{
  "id": "cm9x8u7gh0005v7f2b5c6d7ee",
  "packingCategoryId": "cm9x8t6ef0004v7f2x2y3z4aa",
  "name": "2-person tent",
  "quantity": "1",
  "notes": "Bring the rainfly and stakes",
  "sortOrder": 0,
  "isRequired": true
}
```

```json
{
  "id": "cm9x8v8ij0006v7f2f8g9h0ff",
  "packingCategoryId": "cm9x8t6ef0004v7f2x2y3z4aa",
  "name": "Sleeping bag",
  "quantity": "4",
  "notes": "Rated for 30°F or lower",
  "sortOrder": 1,
  "isRequired": true
}
```

## `OwnedItem`

```json
{
  "id": "cm9x8w9kl0007v7f2j1k2l3gg",
  "userId": "cm9x8p1kq0000v7f2d8l1n3ab",
  "name": "Coleman propane stove",
  "category": "Cooking",
  "quantity": "1",
  "notes": "Works with 16 oz green propane cylinders",
  "isArchived": false,
  "createdAt": "2026-06-20T15:30:00.000Z",
  "updatedAt": "2026-06-20T15:30:00.000Z"
}
```

## How the records connect

- one `User`
- many `Trip`s
- one `Trip` -> one `TripIntake`
- one `Trip` -> one `PackingList`
- one `PackingList` -> many `PackingCategory`s
- one `PackingCategory` -> many `PackingItem`s
- one `User` -> many `OwnedItem`s
