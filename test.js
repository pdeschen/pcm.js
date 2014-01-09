/*global require*/

var should = require('chai').should();
var pcm = require('./pcm');

describe('pcm', function(){
  describe('#toWav().encode()', function(){
    it('should return proper base64 data URI with default options', function(){
      var dataURI = new pcm({}).toWav([0]).encode();
      dataURI.should.equal("data:audio/wav;base64,UklGRiUgICBXQVZFZm10IBAgICABIAEgQB8gIEAfICABIAggZGF0YQEgICAg");
    });
    it('should return proper base64 data URI with rate = 16K', function(){
      var dataURI = new pcm({rate: 16000}).toWav([0]).encode();
      dataURI.should.equal("data:audio/wav;base64,UklGRiUgICBXQVZFZm10IBAgICABIAEggD4gIIA+ICABIAggZGF0YQEgICAg");
    });
    it('should return proper base64 data URI with depth = 16', function(){
      var dataURI = new pcm({depth: 16}).toWav([0]).encode();
      dataURI.should.equal("data:audio/wav;base64,UklGRiYgICBXQVZFZm10IBAgICABIAEgQB8gIIA+ICACIBAgZGF0YQIgICAg");
    });
    it('should return proper base64 data URI with channels = 2', function(){
      var dataURI = new pcm({channels: 2}).toWav([0]).encode();
      dataURI.should.equal("data:audio/wav;base64,UklGRiUgICBXQVZFZm10IBAgICABIAIgQB8gIIA+ICACIAggZGF0YQEgICAg");
    });
  });
});


