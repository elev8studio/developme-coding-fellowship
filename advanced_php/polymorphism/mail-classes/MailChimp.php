<?php

namespace App;

class MailChimp extends Mail
{
	public function mail()
	{
		// ... sends a mail
		dump("Sending using MailChimp: \"{$this->subject}\" to {$this->to}, from {$this->from}, saying {$this->message}");
	}
}
