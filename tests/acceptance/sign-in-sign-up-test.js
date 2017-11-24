import { test } from 'qunit';
import moduleForAcceptance from 'tdd-book-app/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | sign in sign up');

test('visiting /sign-in-sign-up', function(assert) {

  assert.expect(1);
  server.post('/users', function(schema){
    const attributes = this.normalizedRequestAttrs();
    const expectedAttributes = {
      email: 'example@email.com',
      password: '1234567890',
      passwordConfirmation: '1234567890'
    };
    assert.deepEqual(attributes, expectedAttributes, "attributes don't match the expected ones");
    return schema.users.create(attributes);
  });

  click(testSelector('signup-link'));

  andThen( () => {
    fillIn(testSelector('signup-email-field'), 'example@email.com');
    fillIn(testSelector('signup-password-field'), 'example@email.com');
    fillIn(testSelector('signup-password-confirmation-field'), 'example@email.com');
    click(testSelector('signup-submit-btn'));
  });


  //visit('/sign-in-sign-up');
  //andThen(function() {
  //  assert.equal(currentURL(), '/sign-in-sign-up');
  //});

});
