// src/components/knowledge-map/TreeDiagram.jsx
export default function TreeDiagram({ data }) {
  return (
    <div className="space-y-4">
      {data.map((node, i) => (
        <div key={i} className="pl-4 border-l-2 border-gray-600">
          <SkillNode skill={node} />
          {node.children && <TreeDiagram data={node.children} />}
        </div>
      ))}
    </div>
  )
}