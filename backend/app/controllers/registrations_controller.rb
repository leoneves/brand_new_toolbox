# frozen_string_literal: true

class RegistrationsController < ApplicationController
  before_action :authenticate_user!
  respond_to :json

  def create
    user = user_by_token
    return render plain: 'Unauthorized', status: :unauthorized unless user.super? && !create_super_role?

    build_resource(permitted_params)

    resource.save
    render json: resource
  end

  def build_resource(hash = {})
    self.resource = resource_class.new_with_session(hash, session)
  end

  def create_super_role?
    params.dig(:user, :role) != User.roles[:super]
  end

  def permitted_params
    params.require(:user).permit(%i[email user_name role password password_confirmation])
  end
end
