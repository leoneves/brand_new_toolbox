# frozen_string_literal: true

class ApplicationController < ActionController::API
  def devise_parameter_sanitizer
    @devise_parameter_sanitizer ||= Devise::ParameterSanitizer.new(User, :user, params)
  end

  def resource_name
    :user
  end

  def resource=(value)
    @resource = value
  end

  def resource
    @resource ||= User.new
  end

  def resource_class
    User
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end
end
