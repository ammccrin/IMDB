class Movie < ApplicationRecord
  def self.search(search)
    HTTParty.get(URI.escape("http://www.omdbapi.com/?t=#{search}"))
  end
end

# <form>
#   <input name="search">
# </form>


# $.ajax({
#   url: "http://www.omdbapi.com/?t=" + search
#   }).done(res => {
#     res
#   })
