class User < ApplicationRecord
  attr_reader :password

  validates :password_digest, :session_token, :username, :email, presence: true
  validates :session_token, :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize: :ensure_session_token

  def self.find_by_credentials()

  end

end
