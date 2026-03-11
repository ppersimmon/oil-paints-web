<?php

namespace App\Services;

use App\Repository\AuthRepository;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;


class AuthService
{
    public function __construct(
        protected AuthRepository $authRepository,
    ) {}

    public function register(array $data): User
    {
        return $this->authRepository->create($data);
    }

    public function login(array $data): User
    {
        $user = $this->authRepository->findByEmail($data['email']);

        if (!$user || !Hash::check($data['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Wrong data'],
            ]);
        }
        return $user;
    }
}
