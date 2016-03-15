import Ember from 'ember';
import ENV from 'experimenter/config/environment';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model(params) {
        return this.store.find('experiment', `${ENV.JAMDB.namespace}.experiments.${params.experiment_id}`);
    }
});
