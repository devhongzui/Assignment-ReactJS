<div class="row mb-3 mx-0">
    @foreach ($playlists as $playlist)
        @include('music.lazy.item', [
            'link' => route('playlist', $playlist['id']),
            'image' => $playlist['images'][0]['url'],
            'title' => $playlist['name'],
            'description' => $playlist['description'],
            'small_text' => $playlist['owner']['display_name'],
        ])
    @endforeach
</div>
