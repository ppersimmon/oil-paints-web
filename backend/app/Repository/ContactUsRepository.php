<?php

namespace App\Repository;

use App\Models\Message;

class ContactUsRepository
{
    public function create(array $data): Message
    {
        return Message::query()->create($data);
    }
}
