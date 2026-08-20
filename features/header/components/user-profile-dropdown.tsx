type UserProfileDropdownProps = {
  name?: string;
  email: string;
};

export default function UserProfileDropdown({
  name,
  email,
}: UserProfileDropdownProps) {
  return (
    <div className="flex flex-col gap-2 rounded shadow-lg z-10 p-3 bg-accent">
      <p className="text-sm text-white">{name ?? email}</p>
      <a
        href="/auth/logout"
        className="mt-4 inline-block px-4 py-2 bg-accent text-white rounded hover:bg-red-600"
      >
        Logout
      </a>
    </div>
  );
}
