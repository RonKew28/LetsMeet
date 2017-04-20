class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      user_params[:email],
      user_params[:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render(
        json: { base: ["Invalid email or password"] },
        status: 422
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
        json: ["No one is signed in"],
        status: 404
      )
    end
  end

end
