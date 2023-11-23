<div class="row mb-3 mx-0">
    @foreach ($albums as $album)
        @include('music.lazy.item', [
            'link' => route('album', $album['id']),
            'image' => $album['images'][0]['url'],
            'title' => $album['name'],
            'description' => implode(', ', array_column($album['artists'], 'name')),
            'small_text' => $album['release_date'],
        ])
    @endforeach
</div>
