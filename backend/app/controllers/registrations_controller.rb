# frozen_string_literal: true

class RegistrationsController < ApplicationController
  before_action :authenticate_user!
  respond_to :json

  def create
    build_resource(sign_up_params)

    resource.save
    render json: resource
  end

  def build_resource(hash = {})
    self.resource = resource_class.new_with_session(hash, session)
  end

  def sign_up_params
    devise_parameter_sanitizer.sanitize(:sign_up)
  end
end
