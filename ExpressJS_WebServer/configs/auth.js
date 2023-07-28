module.exports = {
    isAuthorized: function (request, response, next) {
      if (request.isAuthenticated()) {
        return next();
      } else {
        request.flash(
          "error_msg",
          "You must be logged in  to access this page."
        );
        response.redirect("/");
      }
    },
    isAdmin: function (request, response, next) {
      if (request.isAuthenticated()) {
        const rolesUser = request.user.roles;
        const admin = rolesUser.find((role) => role == "admin");
        if (admin) {
          return next();
        } else {
          request.flash(
            "error_msg",
            "Authentication failed, only admin can access this page"
          );
          response.redirect("/");
        }
      } else {
        request.flash(
          "error_msg",
          "You must be logged in  to access this page."
        );
        response.redirect("/");
      }
    },
  };