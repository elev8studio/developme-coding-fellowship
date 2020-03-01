<?php

namespace App;

class LocalMailServer extends Mail
{
	public function mail()
	{
		// ... sends a mail
		dump("Sending using local mail server: \"{$this->subject}\" to {$this->to}, from {$this->from}, saying {$this->message}");
	}
}
