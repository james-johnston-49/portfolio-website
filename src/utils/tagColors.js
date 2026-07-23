// A fixed set of pastel colors to pick from
const tagColors = [
  '#FFD6D6', '#FFE8B3', '#FFFAC2', '#D6F5D6',
  '#C2F0F0', '#C2D9FF', '#D9C2FF', '#F0C2E8',
  '#F0D9C2', '#D9D9D9',
]

// Converts any string into a number, always the same number for the same string
function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash)
}

// Picks a color from the palette based on the tag's text
export function tagColor(tag) {
  const index = hashString(tag) % tagColors.length
  return tagColors[index]
}