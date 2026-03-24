module.exports = async (field) => {
  if (!field || typeof field !== 'string') return 'success';
  const urlRegex = /^https:\/\/[^\s/$.?#].[^\s]*$/i;
  if (!urlRegex.test(field.trim())) {
    return 'URL must start with https:// and follow basic URL structure.';
  }
  return 'success';
};
