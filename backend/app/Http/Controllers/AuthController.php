<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use App\Http\Requests\RegisterStore;
use App\Http\Requests\LoginStore;
use App\Http\Resources\UserResource;
use App\Services\AuthService;

class AuthController extends Controller
{
    public function __construct(
        protected AuthService $authService
    ) {}
    public function register(RegisterStore $request): JsonResponse
    {
        $user = $this->authService->register($request->validated());

        return response()->json([
            'user' => new UserResource($user),
            'token' => $user->createToken('API Token')->plainTextToken
        ], 201);
    }

    public function login(LoginStore $request): JsonResponse
    {
        $user = $this->authService->login($request->validated());

        return response()->json([
            'user' => new UserResource($user),
            'token' => $user->createToken('API Token')->plainTextToken
        ]);
    }
}
