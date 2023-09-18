-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pair" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Pair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "mail_address" TEXT,
    "enrollment_status_id" TEXT,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Challenge" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "content" TEXT,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administrator" (
    "id" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "mail_address" TEXT,

    CONSTRAINT "Administrator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamPair" (
    "teamId" TEXT NOT NULL,
    "pairId" TEXT NOT NULL,

    CONSTRAINT "TeamPair_pkey" PRIMARY KEY ("teamId","pairId")
);

-- CreateTable
CREATE TABLE "PairParticipant" (
    "pairId" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,

    CONSTRAINT "PairParticipant_pkey" PRIMARY KEY ("pairId","participantId")
);

-- CreateTable
CREATE TABLE "ParticipantChallengeProgress" (
    "participantId" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "progressStatusId" TEXT NOT NULL,

    CONSTRAINT "ParticipantChallengeProgress_pkey" PRIMARY KEY ("participantId","challengeId","progressStatusId")
);

-- CreateTable
CREATE TABLE "ChallengeGenre" (
    "challengeId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "ChallengeGenre_pkey" PRIMARY KEY ("challengeId","genreId")
);

-- CreateTable
CREATE TABLE "EnrollmentStatus" (
    "id" TEXT NOT NULL,
    "label" TEXT,

    CONSTRAINT "EnrollmentStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgressStatus" (
    "id" TEXT NOT NULL,
    "label" TEXT,

    CONSTRAINT "ProgressStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL,
    "label" TEXT,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_enrollment_status_id_fkey" FOREIGN KEY ("enrollment_status_id") REFERENCES "EnrollmentStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPair" ADD CONSTRAINT "TeamPair_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPair" ADD CONSTRAINT "TeamPair_pairId_fkey" FOREIGN KEY ("pairId") REFERENCES "Pair"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PairParticipant" ADD CONSTRAINT "PairParticipant_pairId_fkey" FOREIGN KEY ("pairId") REFERENCES "Pair"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PairParticipant" ADD CONSTRAINT "PairParticipant_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantChallengeProgress" ADD CONSTRAINT "ParticipantChallengeProgress_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantChallengeProgress" ADD CONSTRAINT "ParticipantChallengeProgress_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantChallengeProgress" ADD CONSTRAINT "ParticipantChallengeProgress_progressStatusId_fkey" FOREIGN KEY ("progressStatusId") REFERENCES "ProgressStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeGenre" ADD CONSTRAINT "ChallengeGenre_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeGenre" ADD CONSTRAINT "ChallengeGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
