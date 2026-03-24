module.exports = async (field, context) => {
  const form = context.parsedIssueBody || {};
  const revenueModel = form['revenue-model']?.value || form['revenue-model'];
  if (revenueModel === 'Yes' && (!field || field.trim() === '')) {
    return 'revenue-details is required when revenue-model is set to "Yes". Please describe current sources of revenue (max 64 words).';
  }
  return 'success';
};
