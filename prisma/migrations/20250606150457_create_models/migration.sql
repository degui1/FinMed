-- CreateTable
CREATE TABLE "estudante" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "estudante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancingSimulation" (
    "id" TEXT NOT NULL,
    "total_amount_cents" INTEGER NOT NULL,
    "installments" INTEGER NOT NULL,
    "monthly_interest_rate" DECIMAL(65,30) NOT NULL,
    "monthly_payment_cents" INTEGER NOT NULL,
    "student_id" TEXT NOT NULL,

    CONSTRAINT "FinancingSimulation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "estudante_email_key" ON "estudante"("email");

-- AddForeignKey
ALTER TABLE "FinancingSimulation" ADD CONSTRAINT "FinancingSimulation_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "estudante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
