require File.expand_path('../../config/boot',        __FILE__)
require File.expand_path('../../config/environment', __FILE__)
require 'clockwork'

include Clockwork



every(1.day, 'Create New Smoke Day', :at => '00:00') { User.all.each { |user|
  user.smokes.create
} }
