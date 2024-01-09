export interface IProfileViewProps {
  username?: string | null;
  email?: string | null;
  avatarUrl: string;
}

export default function ProfileView({
  username,
  email,
  avatarUrl,
}: IProfileViewProps) {
  return (
    <div className="field flex gap-6">
      <div className="avatar">
        <div className="w-24 mask mask-squircle">
          <img src={avatarUrl} />
        </div>
      </div>

      <div className="gap-2">
        <h2 className="text-2xl">{username}</h2>
        <sub className="text-zinc-400">{email}</sub>
      </div>
    </div>
  );
}
