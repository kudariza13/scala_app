class ::Layout::Header::Component < ApplicationComponent
    include ViewComponent::SlotableV2
    renders_one :logo, ::Layout::Header::Navigation::Component 
end