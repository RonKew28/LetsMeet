class AddOrganizerColumnToEventsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :organizer_id, :integer
  end
end
