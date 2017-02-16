class MoviesearchController < ApplicationController
  def index
    if params[:title]
      @movies = Movie.search(params[:title])
    end
  end
end
