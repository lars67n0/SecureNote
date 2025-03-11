interface NoteCardProps {
  title: string;
  description: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default NoteCard;