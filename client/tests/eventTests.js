assert = chai.assert

var recorded = null;
record = function (str) {
  console.log("Recording " + str);
  recorded[str] = true;
};

Meteor.startup(function () {
  Template.hello.events({
    'click #testButton' : function () {
      record('1.first');
    }
  });
  Template.hello.events({
    'click #testButton2' : function () {
      record('2.first');
    }
  });
  Template.hello.events({
    'click #testButton2' : function () {
      record('2.second');
    }
  });
});

describe("Template.hello.events", function() {
  beforeEach(function () {
    recorded = {};
  });

  it("should allow single events to be set", function () {
    document.getElementById("testButton").click();
    assert.isTrue(recorded['1.first']);
  });

  it("should allow two events to be set", function () {
    document.getElementById("testButton2").click();
    assert.isTrue(recorded['2.second'], 'Should fire second handler.');
    assert.isTrue(recorded['2.first'], 'Should fire first handler.');
  });


});
