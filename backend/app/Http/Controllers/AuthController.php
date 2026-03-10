<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\RegisterStore;
use App\Http\Requests\LoginStore;
use App\Http\Resources\UserResource;

class AuthController extends Controller
{
    public function register(RegisterStore $request): JsonResponse
    {
        $validated = $request->validated();
        $user = User::query()->create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        return response()->json([
            'user' => new UserResource($user),
            'token' => $user->createToken('API Token')->plainTextToken
        ], 201);
    }

    public function login(LoginStore $request): JsonResponse
    {
        $validated = $request->validated();
        $user = User::query()->where('email', $validated['email'])->first();

        if (!$user || !Hash::check($validated['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Wrong data'],
            ]);
        }

        return response()->json([
            'user' => new UserResource($user),
            'token' => $user->createToken('API Token')->plainTextToken
        ]);
    }
}
