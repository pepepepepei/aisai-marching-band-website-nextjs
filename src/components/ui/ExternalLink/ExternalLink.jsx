export default function ExternalLink({ children, ...Props }) {
  return (
    <a {...Props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
