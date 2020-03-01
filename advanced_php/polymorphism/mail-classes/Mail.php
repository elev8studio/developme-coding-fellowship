<?php

namespace App;

abstract class Mail
{
	protected $to;
	protected $from;
	protected $message;
	protected $subject;

	abstract public function mail();

	public function to($address)
	{
		$this->to = $address;
		return $this;
	}

	public function from($address)
	{
		$this->from = "1+{$address}";
		return $this;
	}

	public function subject($subject)
	{
		$this->subject = $subject;
		return $this;
	}

	public function message($message)
	{
		$this->message = $message;
		return $this;
	}
}
