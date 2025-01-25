export default function Cursor({children}) {
  return (
    <code className="relative">
      <span className="inline-block max-h-[1.1em] align-[-0.4em] border-b-4 border-white animate-blink">&nbsp;</span>
      {children}
    </code>
  )
}