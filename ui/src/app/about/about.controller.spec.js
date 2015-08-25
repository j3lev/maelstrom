(function () {
  'use strict';

  describe('Controller: AboutCtrl', function () {

    beforeEach(module('ui'));

    it('should contain a variable for derp.', inject(function ($controller) {
      var ac = $controller('AboutCtrl');

      expect(ac.derp).toBe('Foo');
    }));

  });
})();
