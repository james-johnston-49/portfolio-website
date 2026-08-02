// Pulls a short preview out of a poem's full body text.
// Stanzas are separated by a blank line in the source data.

export function firstLine(poem) {
  return poem.body.trim().split("\n")[0];
}

export function firstStanza(poem) {
  return poem.body.trim().split("\n\n")[0];
}
