<?php

namespace App\Exceptions;

use Exception;

class ErrorPageException extends Exception
{
    public function render($request, Throwable $exception)
    {
        // Jika request berasal dari Inertia
        if ($request->inertia()) {
            $status = $exception->getCode() ?: 500;

            return Inertia::render('404', ['status' => $status])
                ->toResponse($request)
                ->setStatusCode($status);
        }

        return parent::render($request, $exception);
    }
}
