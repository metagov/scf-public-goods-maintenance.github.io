module.exports = async (field) => {
  if (!field || typeof field !== 'string') return 'success';
  if (field.length > 128) return `project-name exceeds 128 characters (current: ${field.length}). Please shorten.`;
  return 'success';
};
