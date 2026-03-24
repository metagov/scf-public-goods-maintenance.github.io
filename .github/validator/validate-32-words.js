module.exports = async (field) => {
  if (!field || typeof field !== 'string') return 'success';
  const words = field.trim().split(/\s+/).length;
  if (words > 32) return `one-sentence exceeds 32 words (current: ${words}). Please shorten.`;
  return 'success';
};
