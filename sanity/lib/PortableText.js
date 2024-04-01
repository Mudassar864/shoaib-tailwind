export default function PortableText({ blocks }) {
  return blocks.map((block, index) => (
    <p key={index} className="mb-4 text-sm">
      {block._type === "block" && block.children[0].text}
    </p>
  ));
}
