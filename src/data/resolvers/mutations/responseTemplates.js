import { ResponseTemplates } from '../../../db/models';

export default {
  /**
   * Create new response template
   * @param {Object} fields - response template fields
   * @return {Promise} response template object
   */
  responseTemplateAdd(root, doc, { user }) {
    if (!user) throw new Error('Login required');

    return ResponseTemplates.create(doc);
  },

  /**
   * Update response template
   * @param {String} _id - response template id
   * @param {Object} fields - response template fields
   * @return {Promise} response template object
   */
  responseTemplateEdit(root, { _id, ...fields }, { user }) {
    if (!user) throw new Error('Login required');

    return ResponseTemplates.updateResponseTemplate(_id, fields);
  },

  /**
   * Delete response template
   * @param {String} _id - response template id
   * @return {Promise}
   */
  responseTemplateRemove(root, { _id }, { user }) {
    if (!user) throw new Error('Login required');

    return ResponseTemplates.removeResponseTemplate(_id);
  },
};
