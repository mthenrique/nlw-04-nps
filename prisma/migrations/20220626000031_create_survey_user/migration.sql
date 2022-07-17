-- CreateTable
CREATE TABLE "surveysUsers" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "survey_id" TEXT NOT NULL,
    "value" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "surveysUsers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "surveysUsers" ADD CONSTRAINT "surveysUsers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "surveysUsers" ADD CONSTRAINT "surveysUsers_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "surveys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
