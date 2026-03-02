<?php

namespace App\Services;

use App\Models\Message;

class ContactUsService
{
    public function processContactUsForm(array $data): void
    {
        Message::query()->create($data);
    }
}
