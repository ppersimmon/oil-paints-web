@extends('main')

@section('content')
    <h1>Contact Us</h1>

    @if(session('success'))
        <p style="color: green;">{{ session('success') }}</p>
    @endif

    <form action="{{ route('contact.store') }}" method="POST">
        @csrf

        <div>
            Name: <br>
            <input type="text" name="name" value="{{ old('name') }}">
            @error('name') <br><span style="color: red;">{{ $message }}</span> @enderror
        </div>

        <div>
            Phone: <br>
            <input type="text" name="phone" value="{{ old('phone') }}">
            @error('phone') <br><span style="color: red;">{{ $message }}</span> @enderror
        </div>

        <div>
            Email: <br>
            <input type="email" name="email" value="{{ old('email') }}">
            @error('email') <br><span style="color: red;">{{ $message }}</span> @enderror
        </div>

        <div>
            Message: <br>
            <textarea name="postMessage">{{ old('postMessage') }}</textarea>
            @error('postMessage') <br><span style="color: red;">{{ $message }}</span> @enderror
        </div>

        <button type="submit">Send</button>
    </form>
@endsection
