<?php

namespace App\Http\Controllers;

use App\Services\ContactUsService;
use App\Http\Requests\ContactUsStore;
use Illuminate\Http\JsonResponse;

class ContactUsController extends Controller
{
    protected ContactUsService $contactUsService;

    public function __construct(ContactUsService $contactUsService)
    {
        $this->contactUsService = $contactUsService;
    }

    public function store(ContactUsStore $request): JsonResponse
    {
        $validated = $request->validated();
        $this->contactUsService->processContactUsForm($validated);
        return response()->json([
            'message' => 'Your message has been sent.',
            'data' => $validated
        ], 201);
    }
}
