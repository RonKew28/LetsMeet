class User < ApplicationRecord
  attr_reader :password

  validates :password_digest, :session_token, :username, :email, presence: true
  validates :session_token, :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :created_groups,
  class_name: :Group,
  primary_key: :id,
  foreign_key: :creator_id

  has_many :organized_events,
  class_name: :Event,
  primary_key: :id,
  foreign_key: :organizer_id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(32)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
   BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
   self.session_token = User.generate_session_token
   self.save!
   self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
