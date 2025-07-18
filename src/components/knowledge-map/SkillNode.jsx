// src/components/knowledge-map/SkillNode.jsx
export default function SkillNode({ skill, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer"
    >
      <h4 className="font-medium">{skill.name}</h4>
      {skill.description && (
        <p className="text-sm text-gray-400">{skill.description}</p>
      )}
    </div>
  )
}