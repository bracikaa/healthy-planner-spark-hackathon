/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {
        User.find().exec(function (err, data) {
          return res.json(data);
      });
    },

    create: function (req, res) {

        User.create(req.body).exec(function userCreated(err, user) {
            if (err) {
                console.log(err);
                return res.send(err, 500);
            }

            return res.json(user);
        });
    },

  destroy: function(req, res){
      User.destroy(req.query).exec(function (err){
        if(err){
          console.log(err);
        }
        else
        {
          console.log("User Destroyed");
        }
      });
  },

  show: function(req, res){
      User.find(req.query).exec(function (err, user) {
          if(err) return res.send(err, 500);
          return res.json(user);
      });
  },

  update: function(req, res){
      User.update(req.query, req.body).exec(function (err, user) {
          if(err) return res.send(err, 500);
          return res.json(user);
      });
  }




};

