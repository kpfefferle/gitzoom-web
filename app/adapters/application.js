import RESTAdapter from 'ember-data/adapters/rest';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:github',
  host: 'https://api.github.com'
});
