module.exports = {
    isAuthorized: function (requete, reponse, next) {
      if (requete.isAuthenticated()) {
        return next();
      } else {
        requete.flash(
          "error_msg",
          "You must be logged in  to access this page."
        );
        reponse.redirect("/");
      }
    },
    isAdmin: function (requete, reponse, next) {
      if (requete.isAuthenticated()) {
        const rolesUser = requete.user.roles;
        const admin = rolesUser.find((role) => role == "admin");
        if (admin) {
          return next();
        } else {
          requete.flash(
            "error_msg",
            "Authentication failed, only admin can access this page"
          );
          reponse.redirect("/");
        }
      } else {
        requete.flash(
          "error_msg",
          "You must be logged in  to access this page."
        );
        reponse.redirect("/");
      }
    },
  };