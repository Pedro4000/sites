<?php

namespace TROISWA\Bundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Payments
 *
 * @ORM\Table(name="payments", indexes={@ORM\Index(name="IDX_65D29B32D53183C5", columns={"customerNumber"})})
 * @ORM\Entity
 */
class Payments
{
    /**
     * @var string
     *
     * @ORM\Column(name="checkNumber", type="string", length=50, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $checknumber;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="paymentDate", type="date", nullable=false)
     */
    private $paymentdate;

    /**
     * @var float
     *
     * @ORM\Column(name="amount", type="float", precision=10, scale=0, nullable=false)
     */
    private $amount;

    /**
     * @var \Customers
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="Customers")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="customerNumber", referencedColumnName="customerNumber")
     * })
     */
    private $customernumber;



    /**
     * Set checknumber
     *
     * @param string $checknumber
     *
     * @return Payments
     */
    public function setChecknumber($checknumber)
    {
        $this->checknumber = $checknumber;

        return $this;
    }

    /**
     * Get checknumber
     *
     * @return string
     */
    public function getChecknumber()
    {
        return $this->checknumber;
    }

    /**
     * Set paymentdate
     *
     * @param \DateTime $paymentdate
     *
     * @return Payments
     */
    public function setPaymentdate($paymentdate)
    {
        $this->paymentdate = $paymentdate;

        return $this;
    }

    /**
     * Get paymentdate
     *
     * @return \DateTime
     */
    public function getPaymentdate()
    {
        return $this->paymentdate;
    }

    /**
     * Set amount
     *
     * @param float $amount
     *
     * @return Payments
     */
    public function setAmount($amount)
    {
        $this->amount = $amount;

        return $this;
    }

    /**
     * Get amount
     *
     * @return float
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * Set customernumber
     *
     * @param \TROISWA\Bundle\Entity\Customers $customernumber
     *
     * @return Payments
     */
    public function setCustomernumber(\TROISWA\Bundle\Entity\Customers $customernumber)
    {
        $this->customernumber = $customernumber;

        return $this;
    }

    /**
     * Get customernumber
     *
     * @return \TROISWA\Bundle\Entity\Customers
     */
    public function getCustomernumber()
    {
        return $this->customernumber;
    }
}
